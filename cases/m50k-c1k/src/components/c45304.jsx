import React from 'react';
const LABEL_45304 = 'component_45304';
export function Component45304({ value = 45304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45304, 'data-value': derived.doubled }, children);
}
export default Component45304;
