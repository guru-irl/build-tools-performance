import React from 'react';
const LABEL_41675 = 'component_41675';
export function Component41675({ value = 41675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41675, 'data-value': derived.doubled }, children);
}
export default Component41675;
