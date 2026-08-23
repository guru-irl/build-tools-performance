import React from 'react';
const LABEL_19344 = 'component_19344';
export function Component19344({ value = 19344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19344, 'data-value': derived.doubled }, children);
}
export default Component19344;
