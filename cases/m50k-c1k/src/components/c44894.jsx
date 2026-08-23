import React from 'react';
const LABEL_44894 = 'component_44894';
export function Component44894({ value = 44894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44894, 'data-value': derived.doubled }, children);
}
export default Component44894;
