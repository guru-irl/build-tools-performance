import React from 'react';
const LABEL_14828 = 'component_14828';
export function Component14828({ value = 14828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14828, 'data-value': derived.doubled }, children);
}
export default Component14828;
