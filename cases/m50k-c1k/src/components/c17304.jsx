import React from 'react';
const LABEL_17304 = 'component_17304';
export function Component17304({ value = 17304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17304, 'data-value': derived.doubled }, children);
}
export default Component17304;
