import React from 'react';
const LABEL_44035 = 'component_44035';
export function Component44035({ value = 44035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44035, 'data-value': derived.doubled }, children);
}
export default Component44035;
