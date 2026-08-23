import React from 'react';
const LABEL_19523 = 'component_19523';
export function Component19523({ value = 19523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19523, 'data-value': derived.doubled }, children);
}
export default Component19523;
