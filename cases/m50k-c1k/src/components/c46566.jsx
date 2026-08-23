import React from 'react';
const LABEL_46566 = 'component_46566';
export function Component46566({ value = 46566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46566, 'data-value': derived.doubled }, children);
}
export default Component46566;
