import React from 'react';
const LABEL_40846 = 'component_40846';
export function Component40846({ value = 40846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40846, 'data-value': derived.doubled }, children);
}
export default Component40846;
