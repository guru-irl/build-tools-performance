import React from 'react';
const LABEL_19866 = 'component_19866';
export function Component19866({ value = 19866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19866, 'data-value': derived.doubled }, children);
}
export default Component19866;
