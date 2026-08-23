import React from 'react';
const LABEL_37035 = 'component_37035';
export function Component37035({ value = 37035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37035, 'data-value': derived.doubled }, children);
}
export default Component37035;
