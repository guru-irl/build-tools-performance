import React from 'react';
const LABEL_45511 = 'component_45511';
export function Component45511({ value = 45511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45511, 'data-value': derived.doubled }, children);
}
export default Component45511;
