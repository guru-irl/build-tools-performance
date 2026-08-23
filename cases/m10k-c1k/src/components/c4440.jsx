import React from 'react';
const LABEL_4440 = 'component_4440';
export function Component4440({ value = 4440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4440, 'data-value': derived.doubled }, children);
}
export default Component4440;
