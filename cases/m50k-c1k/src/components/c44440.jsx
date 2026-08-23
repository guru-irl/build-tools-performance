import React from 'react';
const LABEL_44440 = 'component_44440';
export function Component44440({ value = 44440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44440, 'data-value': derived.doubled }, children);
}
export default Component44440;
