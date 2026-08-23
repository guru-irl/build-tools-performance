import React from 'react';
const LABEL_27086 = 'component_27086';
export function Component27086({ value = 27086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27086, 'data-value': derived.doubled }, children);
}
export default Component27086;
