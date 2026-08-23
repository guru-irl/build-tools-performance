import React from 'react';
const LABEL_24538 = 'component_24538';
export function Component24538({ value = 24538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24538, 'data-value': derived.doubled }, children);
}
export default Component24538;
