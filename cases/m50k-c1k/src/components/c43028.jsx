import React from 'react';
const LABEL_43028 = 'component_43028';
export function Component43028({ value = 43028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43028, 'data-value': derived.doubled }, children);
}
export default Component43028;
