import React from 'react';
const LABEL_45386 = 'component_45386';
export function Component45386({ value = 45386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45386, 'data-value': derived.doubled }, children);
}
export default Component45386;
