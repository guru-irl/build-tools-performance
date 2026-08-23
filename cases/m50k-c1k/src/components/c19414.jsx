import React from 'react';
const LABEL_19414 = 'component_19414';
export function Component19414({ value = 19414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19414, 'data-value': derived.doubled }, children);
}
export default Component19414;
