import React from 'react';
const LABEL_19001 = 'component_19001';
export function Component19001({ value = 19001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19001, 'data-value': derived.doubled }, children);
}
export default Component19001;
