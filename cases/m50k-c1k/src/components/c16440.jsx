import React from 'react';
const LABEL_16440 = 'component_16440';
export function Component16440({ value = 16440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16440, 'data-value': derived.doubled }, children);
}
export default Component16440;
