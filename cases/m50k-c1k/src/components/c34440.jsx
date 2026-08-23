import React from 'react';
const LABEL_34440 = 'component_34440';
export function Component34440({ value = 34440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34440, 'data-value': derived.doubled }, children);
}
export default Component34440;
