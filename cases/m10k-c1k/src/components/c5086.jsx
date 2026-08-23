import React from 'react';
const LABEL_5086 = 'component_5086';
export function Component5086({ value = 5086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5086, 'data-value': derived.doubled }, children);
}
export default Component5086;
