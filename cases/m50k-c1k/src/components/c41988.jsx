import React from 'react';
const LABEL_41988 = 'component_41988';
export function Component41988({ value = 41988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41988, 'data-value': derived.doubled }, children);
}
export default Component41988;
