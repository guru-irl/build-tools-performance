import React from 'react';
const LABEL_37544 = 'component_37544';
export function Component37544({ value = 37544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37544, 'data-value': derived.doubled }, children);
}
export default Component37544;
