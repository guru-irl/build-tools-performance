import React from 'react';
const LABEL_19327 = 'component_19327';
export function Component19327({ value = 19327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19327, 'data-value': derived.doubled }, children);
}
export default Component19327;
