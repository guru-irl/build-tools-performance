import React from 'react';
const LABEL_19388 = 'component_19388';
export function Component19388({ value = 19388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19388, 'data-value': derived.doubled }, children);
}
export default Component19388;
