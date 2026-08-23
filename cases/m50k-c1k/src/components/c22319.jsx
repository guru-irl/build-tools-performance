import React from 'react';
const LABEL_22319 = 'component_22319';
export function Component22319({ value = 22319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22319, 'data-value': derived.doubled }, children);
}
export default Component22319;
