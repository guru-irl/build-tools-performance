import React from 'react';
const LABEL_19269 = 'component_19269';
export function Component19269({ value = 19269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19269, 'data-value': derived.doubled }, children);
}
export default Component19269;
