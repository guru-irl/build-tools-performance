import React from 'react';
const LABEL_13555 = 'component_13555';
export function Component13555({ value = 13555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13555, 'data-value': derived.doubled }, children);
}
export default Component13555;
