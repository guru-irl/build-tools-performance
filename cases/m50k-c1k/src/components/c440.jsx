import React from 'react';
const LABEL_440 = 'component_440';
export function Component440({ value = 440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_440, 'data-value': derived.doubled }, children);
}
export default Component440;
