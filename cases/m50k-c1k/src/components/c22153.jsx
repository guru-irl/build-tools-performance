import React from 'react';
const LABEL_22153 = 'component_22153';
export function Component22153({ value = 22153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22153, 'data-value': derived.doubled }, children);
}
export default Component22153;
