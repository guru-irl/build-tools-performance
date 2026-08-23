import React from 'react';
const LABEL_4828 = 'component_4828';
export function Component4828({ value = 4828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4828, 'data-value': derived.doubled }, children);
}
export default Component4828;
