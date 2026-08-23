import React from 'react';
const LABEL_44656 = 'component_44656';
export function Component44656({ value = 44656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44656, 'data-value': derived.doubled }, children);
}
export default Component44656;
