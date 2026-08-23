import React from 'react';
const LABEL_35440 = 'component_35440';
export function Component35440({ value = 35440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35440, 'data-value': derived.doubled }, children);
}
export default Component35440;
