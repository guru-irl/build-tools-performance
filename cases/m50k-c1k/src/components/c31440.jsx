import React from 'react';
const LABEL_31440 = 'component_31440';
export function Component31440({ value = 31440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31440, 'data-value': derived.doubled }, children);
}
export default Component31440;
