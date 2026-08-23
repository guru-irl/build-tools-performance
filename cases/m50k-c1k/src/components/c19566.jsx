import React from 'react';
const LABEL_19566 = 'component_19566';
export function Component19566({ value = 19566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19566, 'data-value': derived.doubled }, children);
}
export default Component19566;
