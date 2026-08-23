import React from 'react';
const LABEL_19139 = 'component_19139';
export function Component19139({ value = 19139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19139, 'data-value': derived.doubled }, children);
}
export default Component19139;
