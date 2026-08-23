import React from 'react';
const LABEL_36440 = 'component_36440';
export function Component36440({ value = 36440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36440, 'data-value': derived.doubled }, children);
}
export default Component36440;
