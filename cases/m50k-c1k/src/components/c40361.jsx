import React from 'react';
const LABEL_40361 = 'component_40361';
export function Component40361({ value = 40361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40361, 'data-value': derived.doubled }, children);
}
export default Component40361;
