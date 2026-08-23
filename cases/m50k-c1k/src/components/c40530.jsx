import React from 'react';
const LABEL_40530 = 'component_40530';
export function Component40530({ value = 40530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40530, 'data-value': derived.doubled }, children);
}
export default Component40530;
