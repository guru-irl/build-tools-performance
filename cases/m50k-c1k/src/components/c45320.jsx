import React from 'react';
const LABEL_45320 = 'component_45320';
export function Component45320({ value = 45320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45320, 'data-value': derived.doubled }, children);
}
export default Component45320;
