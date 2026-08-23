import React from 'react';
const LABEL_45748 = 'component_45748';
export function Component45748({ value = 45748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45748, 'data-value': derived.doubled }, children);
}
export default Component45748;
