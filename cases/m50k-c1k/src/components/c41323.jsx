import React from 'react';
const LABEL_41323 = 'component_41323';
export function Component41323({ value = 41323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41323, 'data-value': derived.doubled }, children);
}
export default Component41323;
