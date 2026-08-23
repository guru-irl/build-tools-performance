import React from 'react';
const LABEL_19306 = 'component_19306';
export function Component19306({ value = 19306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19306, 'data-value': derived.doubled }, children);
}
export default Component19306;
