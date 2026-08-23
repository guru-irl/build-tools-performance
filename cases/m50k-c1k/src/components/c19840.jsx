import React from 'react';
const LABEL_19840 = 'component_19840';
export function Component19840({ value = 19840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19840, 'data-value': derived.doubled }, children);
}
export default Component19840;
