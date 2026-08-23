import React from 'react';
const LABEL_45656 = 'component_45656';
export function Component45656({ value = 45656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45656, 'data-value': derived.doubled }, children);
}
export default Component45656;
