import React from 'react';
const LABEL_11460 = 'component_11460';
export function Component11460({ value = 11460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11460, 'data-value': derived.doubled }, children);
}
export default Component11460;
