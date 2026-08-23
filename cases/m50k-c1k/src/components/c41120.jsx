import React from 'react';
const LABEL_41120 = 'component_41120';
export function Component41120({ value = 41120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41120, 'data-value': derived.doubled }, children);
}
export default Component41120;
