import React from 'react';
const LABEL_19936 = 'component_19936';
export function Component19936({ value = 19936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19936, 'data-value': derived.doubled }, children);
}
export default Component19936;
