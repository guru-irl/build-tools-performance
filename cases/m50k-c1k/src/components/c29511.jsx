import React from 'react';
const LABEL_29511 = 'component_29511';
export function Component29511({ value = 29511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29511, 'data-value': derived.doubled }, children);
}
export default Component29511;
