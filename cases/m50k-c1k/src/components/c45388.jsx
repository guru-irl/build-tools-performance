import React from 'react';
const LABEL_45388 = 'component_45388';
export function Component45388({ value = 45388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45388, 'data-value': derived.doubled }, children);
}
export default Component45388;
