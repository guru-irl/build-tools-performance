import React from 'react';
const LABEL_42828 = 'component_42828';
export function Component42828({ value = 42828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42828, 'data-value': derived.doubled }, children);
}
export default Component42828;
