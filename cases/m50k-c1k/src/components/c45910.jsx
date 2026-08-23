import React from 'react';
const LABEL_45910 = 'component_45910';
export function Component45910({ value = 45910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45910, 'data-value': derived.doubled }, children);
}
export default Component45910;
