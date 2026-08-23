import React from 'react';
const LABEL_19080 = 'component_19080';
export function Component19080({ value = 19080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19080, 'data-value': derived.doubled }, children);
}
export default Component19080;
