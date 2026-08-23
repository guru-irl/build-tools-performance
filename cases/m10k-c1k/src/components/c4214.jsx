import React from 'react';
const LABEL_4214 = 'component_4214';
export function Component4214({ value = 4214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4214, 'data-value': derived.doubled }, children);
}
export default Component4214;
